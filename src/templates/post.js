import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner">
                <article className="post post-full">
                  <header className="post-header inner-small">
                    <h1 className="post-title line-top">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    <div className="post-meta">
                      <span className="published">
                        ✍ by {_.get(this.props, 'pageContext.site.data.author.name')}
                      </span>
                      <span>, </span>
                      <time className="published"
                        dateTime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%b %d, %Y')}</time>
                      <span> </span>
                      <a class="twitter-share-button"
                          href={'https://twitter.com/intent/tweet?via=goseekfirst&hashtags=NewBlog%2CSeekFirst&text=' + _.get(this.props, 'pageContext.frontmatter.title')}
                          data-size="large">
                        Tweet
                      </a>
                    </div>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                  <div className="post-thumbnail">
                    <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                  </div>
                  }
                  <div className="post-content inner-small">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
