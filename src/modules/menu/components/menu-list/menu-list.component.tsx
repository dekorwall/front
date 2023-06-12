import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import { Dekor } from '@app/modules/menu/types/dekor';
import { FC } from 'react';

interface MenuListProps {
    items: Dekor[];
}

export const MenuList: FC<MenuListProps> = ({items}) => {
    return (
        <div className='flex flex-wrap gap-10'>
            {items.map(({ image, ...dekor }) => (
                <MenuItem
                    {...dekor}
                    imagePath={'/assets/dekor/' + image}
                    key={`dekor=${dekor.id}`}
                />
            ))}
        </div>
    );
};