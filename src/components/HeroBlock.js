import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block hero-block outer">
              <div className="inner-small">
                <div className="block-header">
                  <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                </div>
                <div className="block-content">
                  <div className="block-copy">
                    {markdownify(_.get(this.props, 'section.content'))}
                  </div>
                </div>
                {_.get(this.props, 'section.actions') && 
                <p className="block-cta">
                  {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                  <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button">{_.get(action, 'label')}</Link>
                  ))}
                </p>
                }
              </div>
            </section>
        );
    }
}
