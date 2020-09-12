import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content="Making no-code apps and writing daily devotions"></meta>
                    <meta name="keywords" content="Write,Faith,Hope,Love,No-Code,Apps"></meta>
                    <meta name="robots" content="index, follow"></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content={_.get(this.props, 'frontmatter.excerpt')} />
                    <meta name="twitter:title" content={_.get(this.props, 'pageContext.frontmatter.title')} />
                    <meta name="twitter:site" content="https://www.seekfirst.ltd" />
                    <meta name="twitter:image" content={'https://www.seekfirst.ltd' + _.get(this.props, 'pageContext.frontmatter.content_img_path')} />
                    <meta name="twitter:creator" content="@goseekfirst" />
                    <link rel="icon" href="https://www.seekfirst.ltd/images/seekfirst-logo.png"></link>
                    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i" rel="stylesheet"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                    <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="seekfirst" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting. You can now buy me a coffee!" data-color="#79D6B5" data-position="" data-x_margin="18" data-y_margin="18"></script>
                    <script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>
                </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.color_scheme') + ' accent-' + _.get(this.props, 'pageContext.site.siteMetadata.accent_color')}>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
