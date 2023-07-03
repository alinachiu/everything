import { useCallback, useState } from "react";
import axios from 'axios';
import {
  Container,
  Text,
} from '@chakra-ui/react';
import ShortenUrlForm from "./ShortenUrlForm";
import {Shortened} from './types';
import UrlList from "./UrlList";

export function App() {
  const [urls, setUrls] = useState<Array<Shortened>>([]);

  const requestShortUrl = useCallback(
    async (inputUrl: string) => {
      const response = await axios.post(`http://localhost:3333/api/shorten`, {
        original: inputUrl,
      });

      const newUrl = response.data as Shortened;

      setUrls([newUrl, ...urls]);
    },
    [urls, setUrls]
  );

  return (
    <Container maxW='2xl' marginBlock={5}>
      <Text fontSize='5xl' align='center' color="blue.400">My URL Shortener</Text>
      <ShortenUrlForm requestShortUrl={requestShortUrl}/>
      <UrlList urls={urls} />
    </Container>
  );
}

export default App;