# Translation Automation System

This directory contains the automated translation system for the Front-end Developer Interview Questions repository.

## Overview

The translation system automatically converts English questions from `src/questions/` into translated versions for each target language in `src/translations/`.

## Files

- `translate.js` - Main translation script
- `translation-config.json` - Configuration for languages and AI settings

## Usage

### Prerequisites

1. Set up OpenAI API key (optional - falls back to mock translations if not available):
   ```bash
   export OPENAI_API_KEY="your-api-key-here"
   ```

### Running Translations

#### Translate all languages:
```bash
npm run translate:all
```

#### Translate a specific language:
```bash
npm run translate spanish
# or
node scripts/translate.js spanish
```

#### Available languages:
- `test-lang` - Test language for development
- `spanish` - Spanish translation
- `french` - French translation  
- `chinese` - Chinese translation

### Adding New Languages

1. Add language configuration to `translation-config.json`:
```json
{
  "languages": {
    "your-language": {
      "title": "Your Language Title",
      "lang": "language-code",
      "rtl": false,
      "sections": {
        "general": "General Questions Translation",
        "html": "HTML Questions Translation",
        // ... etc
      }
    }
  }
}
```

2. Create the target directory:
```bash
mkdir -p src/translations/your-language
```

3. Run the translation:
```bash
npm run translate your-language
```

## How It Works

1. **Question Extraction**: Reads all English question files from `src/questions/`
2. **AI Translation**: Uses OpenAI GPT-4 to translate questions while preserving format
3. **File Generation**: Creates translated README.md files using the template structure
4. **Format Preservation**: Maintains markdown formatting, code snippets, and navigation

## Question Formats Supported

- **Bullet Point Questions**: Standard `* Question text` format
- **Coding Questions**: `Question: What is...` format with code blocks
- **Nested Questions**: Indented sub-questions with `  * Sub-question`

## Configuration

### Language Configuration
Each language needs:
- `title`: Translated page title
- `lang`: Language code (e.g., 'es', 'fr', 'zh')
- `rtl`: Boolean for right-to-left languages
- `sections`: Translated section headers

### AI Configuration
- `provider`: Currently supports "openai"
- `model`: AI model to use (default: "gpt-4")
- `systemPrompt`: Instructions for the AI translator

## Development

### Testing
Use the `test-lang` language for development and testing:
```bash
npm run translate test-lang
```

### Mock Translations
When OpenAI API is not available, the system falls back to mock translations that prefix questions with `[LANGUAGE]` for testing.

## Integration with Build Process

The translation system can be integrated into CI/CD workflows to automatically update translations when English questions change.

### GitHub Actions Example:
```yaml
- name: Update Translations
  run: |
    export OPENAI_API_KEY=${{ secrets.OPENAI_API_KEY }}
    npm run translate:all
```

## Future Enhancements

- Support for additional AI providers (Azure OpenAI, Google Translate, etc.)
- Incremental translations (only update changed questions)
- Translation quality validation
- Support for more complex markdown structures
- Translation memory and consistency checking