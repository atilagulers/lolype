import React, {ReactNode, useEffect} from 'react';
import {Container} from 'react-bootstrap';

import './PageWrapper.scss';

interface PropType {
  title: string;
  children: ReactNode;
}

function PageWrapper({title, children}: PropType) {
  useEffect(() => {
    document.title = `${title}`;
    window.scrollTo(0, 0);
  }, [title]);

  return <Container>{children}</Container>;
}

export default PageWrapper;
