import Page from "../../src/modules/dog/screens/profile"

export const getServerSideProps = (context) => {
  return {
      props: {
          query: context.query
      }
  }
}

export default Page