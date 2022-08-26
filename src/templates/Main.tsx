import { ReactNode } from 'react';
import Form from '@/components/form';
import Footer from '@/components/footer';
import Header from '@/components/header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="px-1 antialiased">
      {props.meta}
      <Header />

      <div className="content mt-10 pb-44 text-xl bg-orange-100">
        {props.children}
      </div>

      <Form />
      <Footer />
    </div>
)};

export { Main };
