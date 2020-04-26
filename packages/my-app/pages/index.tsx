import Link from 'next/link'
import Layout from '../components/Layout'
import { ExampleComponent } from '@ponday/components';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <ExampleComponent text="lerna + Next.js Example" />
  </Layout>
)

export default IndexPage
