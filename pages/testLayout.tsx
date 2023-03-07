import Head from "next/head";
import Link from "next/link";
import { SlButton, SlIcon } from "@/components/SLComponents";

export default function TestLayout() {
  return (
    <>
      <Head>
        <title>Test Layout</title>
      </Head>
      <h1>Shoelace components test</h1>
      <br />
      <div>
        <Link href="/">
          <SlButton variant="primary">
            <SlIcon name="arrow-left" />
            Go back
          </SlButton>
        </Link>
      </div>
    </>
  );
}
