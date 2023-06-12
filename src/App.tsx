import { Header } from "@app/common/components/header/header.component";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import { Footer } from '@app/common/components/footer/footer.component';
import dekorList from '@app/mocks/dekor.json';

export const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={dekorList}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
