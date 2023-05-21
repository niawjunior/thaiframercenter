import type { ReactElement } from "react";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@/components/layout"), {
  ssr: false,
});
const NestedLayout = dynamic(() => import("@/components/nested-layout"), {
  ssr: false,
});
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Thai Framer Center</h1>
      </div>
    </main>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
