import React, {PropsWithChildren} from 'react';
import Header from "@/components/header";

const Layout = (props: PropsWithChildren) => {
  return (
    <main>
      <Header/>
      {props.children}
    </main>
  );
};

export default Layout;