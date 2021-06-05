import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionPdf extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        numPages: null,
        pageNumber: 1,
        width: null
      };
      this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    }
    onDocumentLoadSuccess({ numPages }) {
      this.setState({numPages: numPages, pageNumber: 1});
    }

    componentDidMount () {
      this.setDivSize()
      window.addEventListener("resize", this.setDivSize)
    }
  
    componentWillUnmount () {
      window.removeEventListener("resize", this.setDivSize)
    }
  
    setDivSize = () => {
      this.setState({width: this.pdf_wrapper.getBoundingClientRect().width})
    }

    render() {

        let section = _.get(this.props, 'section', null);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

        return (
          <section id={_.get(section, 'section_id', null)} className="block block-pdf">
            <hr/>
            {_.get(section, 'title', null) && (
            <h2 className="block-title underline inner-sm">{_.get(section, 'title', null)}</h2>
            )}
            {_.get(section, 'pdf-url', null) && (
            <div className="block-content inner-sm">

              <div id='pdf_wrapper' style={{width: '100%'}} ref={(ref) => this.pdf_wrapper = ref}>
                <Document file={withPrefix(_.get(section, 'pdf-url', null))} renderMode='svg' onLoadSuccess={this.onDocumentLoadSuccess}>
                  <Page pageNumber={this.state.pageNumber} width={this.state.width}/>
                </Document>
              </div>

              {markdownify(_.get(section, 'annotation', null))}
              {_.get(section, 'actions', null) && (
                <div className="block-buttons inner-sm">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                </div>
              )}
            </div>
            )}
          </section>
        );
    }
}