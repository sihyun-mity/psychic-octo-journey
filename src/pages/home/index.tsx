import { useEffect, useId, useState } from 'react';
import { Button, Container, Header, Image, Title } from '@/pages/home/index.styles';
import kong from '@/assets/images/kong.jpg';

const Index = () => {
  const [count, setCount] = useState<number>(0);
  const componentId = useId();

  useEffect(() => {
    window.scrollTo(0, document.documentElement.offsetHeight);
  }, [count]);

  return (
    <Container>
      <Header>
        <Title>정채영 킹받을 때 누르는 버튼</Title>
        <Button onClick={() => setCount((prev) => ++prev)}>딸깍</Button>
      </Header>
      {Array.from({ length: count }).map((_, i) => (
        <Image alt="" src={kong} key={`kong-${componentId}-${i}`} />
      ))}
    </Container>
  );
};

export default Index;
