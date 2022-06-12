import { Box, Tag, TagCloseButton, TagLabel, chakra } from '@chakra-ui/react';
import * as React from 'react';
import { Input } from '../../components/input';
import { TagGroup, TagInputBox } from './tag-input';
import { useTagInput } from './use-tag-input';

export default {
  title: 'CHAKRA/Tags Input',
};

export const Example = () => {
  const { getInputProps, getDeleteButtonProps, tags } = useTagInput({
    allowDuplicates: true,
  });

  return (
    <Box>
      <Input {...getInputProps()} />
      <Box>
        {tags.map(tag => (
          <Tag size="lg">
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton {...getDeleteButtonProps({ value: tag })} />
          </Tag>
        ))}
      </Box>
    </Box>
  );
};

export const TagsInputUI = () => {
  const { isFocused, getInputProps, getDeleteButtonProps, tags, clearAll } =
    useTagInput({
      blurBehavior: 'addTag',
      onChange: values => {
        console.log(values);
      },
      defaultValue: ['Meabed', 'Maradona'],
    });

  return (
    <Box m="200px">
      <TagInputBox isFocused={isFocused}>
        <TagGroup>
          {tags.map(tag => (
            <Tag size="md" key={tag}>
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton {...getDeleteButtonProps({ value: tag })} />
            </Tag>
          ))}
          <chakra.input
            {...getInputProps()}
            flexGrow={1}
            outline={0}
            height="24px"
          />
        </TagGroup>
      </TagInputBox>

      <button onClick={clearAll}>Clear</button>
    </Box>
  );
};
