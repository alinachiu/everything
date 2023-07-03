import { Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { Shortened } from './types';

type UrlListProps = {
  urls: Array<Shortened>;
};

export const UrlList: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <UnorderedList id="url-list">
    {urls.map((u) => (
      <ListItem>
        <Link>{u.short}</Link> - <Link>{u.original}</Link>
      </ListItem>
    ))}
    </UnorderedList>
  );
};

export default UrlList;