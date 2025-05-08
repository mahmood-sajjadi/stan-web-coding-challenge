import { Home } from "../pages/Home";
import { List as ListPage } from "../pages/List";
import { Default as DefaultLayout} from "../layouts/Default";
import { homeUri, programTypesList, type ProgramType } from "../config";

const HomeElement = (
  <DefaultLayout header="Popular Titles">
    <Home />
  </DefaultLayout>
);

const ListElement = (programType: ProgramType, header: string) => (
  <DefaultLayout header={header}>
    <ListPage programType={programType} />
  </DefaultLayout>
);

const baseRoutes = [
  {title: "Home", uri: "", element: HomeElement},
];

export const routes = [
  ...baseRoutes,
  ...programTypesList.map(program => ({title: program.description, uri: program.uri, element: ListElement(program.type, program.description)}))
];

export const defaultUri = homeUri;

export const PageNotFoundElement = (
  <DefaultLayout header="Page Not Found">
    Page Not Found!
  </DefaultLayout>
);