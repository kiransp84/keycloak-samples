import Link from "./Link";
import Navbar from "./navbar";

export default function Root(props) {
  return (<>
  <section>{props.name} is mounted!</section>
  <Navbar/>
  <Link />
</>);
}
