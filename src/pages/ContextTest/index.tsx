import { PageContainer } from '@ant-design/pro-components';
import Heading from './components/Heading';
import Section from './components/Section';

export default function TestPage() {
  return (
    <PageContainer ghost>
      <Section>
        <Heading>主标题</Heading>
        <Section>
          <Heading>副标题</Heading>
          <Heading>副标题</Heading>
          <Heading>副标题</Heading>
          <Section>
            <Heading>子标题</Heading>
            <Heading>子标题</Heading>
            <Heading>子标题</Heading>
            <Section>
              <Heading>子子标题</Heading>
              <Heading>子子标题</Heading>
              <Heading>子子标题</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </PageContainer>
  );
}
