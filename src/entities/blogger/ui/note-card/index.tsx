import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { formatDate } from '~/shared/lib';

import { Note } from '../../model/types';
import { noteCardStyles as styles } from './index.styles';

type NoteCardProps = {
    note: Note;
};

export const NoteCard: FC<NoteCardProps> = ({ note }) => (
    <Stack {...styles.note}>
        <Text {...styles.noteDate} data-test-id={DATA_TEST_ATTRIBUTES.NOTES_CARD_DATE}>
            {formatDate(note.date)}
        </Text>
        <Text {...styles.noteText} data-test-id={DATA_TEST_ATTRIBUTES.NOTES_CARD_TEXT}>
            {note.text}
        </Text>
    </Stack>
);
