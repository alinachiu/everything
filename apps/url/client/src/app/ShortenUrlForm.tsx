import { Button, FormLabel, Input } from '@chakra-ui/react';
import { FormEvent, useCallback, useState } from 'react';

type ShortenUrlFormProps = {
  requestShortUrl: (original: string) => Promise<void>;
};

export const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({
  requestShortUrl,
}) => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      await requestShortUrl(inputUrl);
      setInputUrl('');
    },
    [inputUrl, setInputUrl]
  );
  return (
      <form onSubmit={onSubmit}>
        <FormLabel>URL</FormLabel>
        <Input
          id="url-input"
          type='url'
          value={inputUrl}
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
          placeholder="www.my-super-long-url-here.com/12345"
        />
        <Button id="submit-btn" type="submit" marginBlock={3} colorScheme="telegram">Generate</Button>
      </form>
  );
};

export default ShortenUrlForm;