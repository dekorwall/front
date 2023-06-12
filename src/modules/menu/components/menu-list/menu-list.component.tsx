import dekorList from '@app/mocks/dekor.json';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
export const MenuList = () => {
    return (
        <div className='flex flex-wrap gap-10'>
            {dekorList.map(({ image, ...dekor }) => (
                <MenuItem {...dekor} imagePath={'/assets/dekor/' + image} />
            ))}
        </div>
    )
};