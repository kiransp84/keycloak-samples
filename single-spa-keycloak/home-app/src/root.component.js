import Link from "./Link";

export default function Root(props) {
  return (<>
  <section>{props.name} is mounted!</section>
  <Link />
</>);
}
