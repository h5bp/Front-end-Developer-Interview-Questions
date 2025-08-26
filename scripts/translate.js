#!/usr/bin/env node

/**
 * Translation automation script for Front-end Developer Interview Questions
 * 
 * This script reads English question files from src/questions/ and generates
 * translated versions for each target language in src/translations/
 */

const fs = require('fs').promises;
const path = require('path');
const config = require('./translation-config.json');
const OpenAI = require('openai');

class QuestionTranslator {
  constructor() {
    this.sourceDir = path.join(__dirname, '../src/questions');
    this.translationsDir = path.join(__dirname, '../src/translations');
    this.templatePath = path.join(this.translationsDir, '_template/README.md');
    
    // Initialize OpenAI client if API key is available
    const apiKey = process.env.OPENAI_API_KEY || config.ai.apiKey.replace('${OPENAI_API_KEY}', '');
    if (apiKey && apiKey !== '${OPENAI_API_KEY}') {
      this.openai = new OpenAI({ apiKey });
    }
  }

  /**
   * Read all English question files
   */
  async readSourceQuestions() {
    const questionFiles = await fs.readdir(this.sourceDir);
    const questions = {};

    for (const file of questionFiles) {
      if (file.endsWith('.md')) {
        const content = await fs.readFile(path.join(this.sourceDir, file), 'utf-8');
        const category = file.replace('.md', '').replace('-questions', '');
        questions[category] = this.extractQuestions(content);
        console.log(`Extracted ${questions[category].length} questions from ${category}`);
      }
    }

    return questions;
  }

  /**
   * Extract questions from markdown content
   */
  extractQuestions(content) {
    const lines = content.split('\n');
    const questions = [];
    let pastFrontMatter = false;
    let currentQuestion = '';
    let inCodeBlock = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip front matter
      if (line.trim() === '---') {
        if (!pastFrontMatter) {
          pastFrontMatter = true;
          // Skip until we find the closing ---
          while (i + 1 < lines.length && lines[i + 1].trim() !== '---') {
            i++;
          }
          i++; // Skip the closing ---
          continue;
        }
      }
      
      if (!pastFrontMatter) continue;

      // Handle code blocks
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
      }

      // Collect question lines (bullet points)
      if (line.trim().startsWith('* ') || line.trim().startsWith('  * ')) {
        questions.push(line);
      }
      // Handle "Question:" format for coding questions
      else if (line.trim().startsWith('Question:')) {
        if (currentQuestion) {
          questions.push(`* ${currentQuestion.trim()}`);
        }
        currentQuestion = line.trim().replace('Question:', '').trim();
      }
      // Continue multi-line questions or code blocks
      else if (currentQuestion && (line.trim() || inCodeBlock)) {
        currentQuestion += '\n' + line;
      }
    }

    // Add the last question if exists
    if (currentQuestion) {
      questions.push(`* ${currentQuestion.trim()}`);
    }

    return questions;
  }

  /**
   * Translate questions using AI
   */
  async translateQuestions(questions, targetLanguage) {
    console.log(`Translating questions to ${targetLanguage}...`);
    
    const languageConfig = config.languages[targetLanguage];
    if (!languageConfig) {
      throw new Error(`Language ${targetLanguage} not found in configuration`);
    }

    const translated = {};
    
    // If OpenAI is not available, use mock translations
    if (!this.openai) {
      console.log('OpenAI API not available, using mock translations');
      for (const [category, questionList] of Object.entries(questions)) {
        translated[category] = questionList.map(q => `[${targetLanguage.toUpperCase()}] ${q}`);
      }
      return translated;
    }

    // Use AI to translate each category
    for (const [category, questionList] of Object.entries(questions)) {
      if (questionList.length === 0) continue;
      
      try {
        console.log(`  Translating ${category} questions...`);
        const questionsText = questionList.join('\n');
        
        const response = await this.openai.chat.completions.create({
          model: config.ai.model,
          messages: [
            {
              role: 'system',
              content: `${config.ai.systemPrompt} 

Target language: ${languageConfig.lang} (${targetLanguage})

Important: 
- Maintain the exact markdown bullet point format (* and  *)
- Preserve all code snippets and technical terms
- Keep the professional interview tone
- Do not add explanations or extra text`
            },
            {
              role: 'user',
              content: questionsText
            }
          ],
          temperature: 0.3,
          max_tokens: 4000
        });

        const translatedText = response.choices[0].message.content.trim();
        translated[category] = translatedText.split('\n').filter(line => line.trim());
        
      } catch (error) {
        console.error(`Error translating ${category}:`, error.message);
        // Fallback to mock translation
        translated[category] = questionList.map(q => `[${targetLanguage.toUpperCase()}] ${q}`);
      }
    }
    
    return translated;
  }

  /**
   * Generate translated README.md file
   */
  async generateTranslationFile(translatedQuestions, language) {
    const languageConfig = config.languages[language];
    if (!languageConfig) {
      throw new Error(`Language ${language} not found in configuration`);
    }

    const template = await this.loadTemplate();
    let content = template;

    // Update front matter with language-specific information
    content = content.replace(
      /---\ntitle: .*?\nlayout: .*?\npermalink: .*?\n---/,
      `---\ntitle: ${languageConfig.title}\nlayout: layouts/page.njk\npermalink: /translations/${language}/index.html\nlang: ${languageConfig.lang}\n---`
    );

    // Replace each section's questions individually
    const sections = ['general', 'html', 'css', 'javascript', 'coding', 'testing', 'performance', 'network', 'fun'];
    
    for (const section of sections) {
      if (translatedQuestions[section]) {
        // Find the section header and replace the content that follows
        const sectionHeaderPattern = new RegExp(
          `(#### \\[\\[⬆\\]\\]\\(#toc\\) <a name='${section}'>)[^<]*(</a>\\s*\\n\\n)([\\s\\S]*?)(?=\\n\\n#### |$)`,
          'g'
        );
        
        const sectionTitle = languageConfig.sections[section] || `${section} Questions`;
        const questionText = translatedQuestions[section].join('\n');
        
        content = content.replace(sectionHeaderPattern, 
          `$1${sectionTitle}:$2${questionText}\n\n`
        );
      }
    }

    return content;
  }

  /**
   * Load template file
   */
  async loadTemplate() {
    return await fs.readFile(this.templatePath, 'utf-8');
  }

  /**
   * Main translation function
   */
  async translateToLanguage(language) {
    console.log(`Starting translation for ${language}...`);
    
    const questions = await this.readSourceQuestions();
    const translatedQuestions = await this.translateQuestions(questions, language);
    const content = await this.generateTranslationFile(translatedQuestions, language);
    
    const outputPath = path.join(this.translationsDir, language, 'README.md');
    await fs.writeFile(outputPath, content, 'utf-8');
    
    console.log(`Translation completed for ${language}: ${outputPath}`);
  }

  /**
   * Translate all configured languages
   */
  async translateAll() {
    for (const language of Object.keys(config.languages)) {
      try {
        await this.translateToLanguage(language);
      } catch (error) {
        console.error(`Error translating ${language}:`, error.message);
      }
    }
  }
}

// CLI interface
async function main() {
  const translator = new QuestionTranslator();
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: node translate.js [language|all]');
    console.log('Available languages:', Object.keys(config.languages).join(', '));
    return;
  }

  if (args[0] === 'all') {
    await translator.translateAll();
  } else {
    await translator.translateToLanguage(args[0]);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = QuestionTranslator;