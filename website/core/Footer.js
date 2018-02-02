/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Web Platform Questions</h5>
            <a href={this.docUrl('gettingstarted.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('html.html', this.props.language)}>
              HTML Questions
            </a>
            <a href={this.docUrl('css.html', this.props.language)}>
              CSS Questions
            </a>
            <a href={this.docUrl('javascript.html', this.props.language)}>
              JavaScript Questions
            </a>
            <a href={this.docUrl('network.html', this.props.language)}>
              Network Questions
            </a>
            <a href={this.docUrl('performance.html', this.props.language)}>
              Performance Questions
            </a>
          </div>
          <div>
            <h5>Other Questions</h5>
            <a href={this.docUrl('coding.html', this.props.language)}>
              Coding Questions
            </a>
            <a href={this.docUrl('testing.html', this.props.language)}>
              Testing Questions
            </a>
            <a href={this.docUrl('general.html', this.props.language)}>
              General Questions
            </a>
            <a href={this.docUrl('fun.html', this.props.language)}>
              Fun Questions
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/.github/CONTRIBUTING.md"
              target="_blank">
              Contribute
            </a>
            <a
              href="https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTORS.md"
              target="_blank">
              Hall of Fame
            </a>
            <a href="https://twitter.com/h5bp" target="_blank">
              Twitter
            </a>
            <a
              href="https://github.com/h5bp/Front-end-Developer-Interview-Questions/"
              target="_blank">
              GitHub
            </a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/oss_logo.png'}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">
          Copyright &copy; {currentYear} Facebook Inc.
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
