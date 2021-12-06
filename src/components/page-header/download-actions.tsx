import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { MdExpandMore } from 'react-icons/md';
import { downloadAs } from '../../util/utils';
import { useAppSelector } from '../../redux';

export default function DownloadActions() {
    const param = useAppSelector(state => state.param);

    const handleDownloadJson = () => {
        downloadAs(`RMG_${new Date().valueOf()}.json`, 'application/json', JSON.stringify(param));
    };

    return (
        <Menu>
            <MenuButton as={Button} variant="ghost" size="sm" rightIcon={<MdExpandMore />}>
                Downloads
            </MenuButton>
            <MenuList>
                <MenuItem onClick={handleDownloadJson}>Configuration file</MenuItem>
                <MenuItem>Images</MenuItem>
            </MenuList>
        </Menu>
    );
}
