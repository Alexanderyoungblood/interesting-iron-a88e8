import React from 'react';
import { Textfit } from 'react-textfit';

// _.map(_.get(this.props, 'pageContext.site.siteMetadata.header.animated_title', null), (line, line_idx) => {
//   return (
//       <span key={line_idx} class="line">
//           {_.get(line, "shown", null)}<span class="hidden"><span><span>{_.get(line, "hidden", null)}</span></span></span>
//       </span>
//   )

// })

export default class TitleCard extends React.Component {
    render() {
        return (
          <div class="site-title-card">
            <Textfit mode="single" max="33.33333">
              <div class="line">
                A<span class="reveal">lexander</span>
              </div>
              <div class="line">
                <span class="hidden">A</span>J<span class="reveal">ohn</span>
              </div>
              <div class="line">
                <span class="hidden">A</span><span class="hidden">J</span>Youngb<span class="reveal">lood</span>
              </div>
            </Textfit>
          </div>  
        );
    }
}
