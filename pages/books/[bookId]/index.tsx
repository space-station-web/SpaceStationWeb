import styled from '@emotion/styled';
import BookDetail from '../../../src/components/units/Book/detail/BookDetail.container'
import { useState } from 'react';
import CommentWrite from '../../../src/components/units/BoardComment/write/CommentWrite.container';

const Align = styled.div`
  display: flex;
  flex-direction: column;
`;


export default function BookDetailPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Align>
      <BookDetail setIsOpen={setIsOpen} />
      {isOpen ? <CommentWrite /> : " "}
    </Align>
  )
}
