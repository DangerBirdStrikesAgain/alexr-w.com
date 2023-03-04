import React from 'react';
import { Document, Page } from 'react-pdf';
import CVpdf from './CV.pdf';

export default function CV() {
    return (
      <Document file={CVpdf}>
        <Page pageNumber={1} />
      </Document>
    );
  }