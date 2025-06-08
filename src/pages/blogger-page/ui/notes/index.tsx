import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { Note, NoteCard } from '~/entities/blogger';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useAnchorLink } from '~/shared/lib';

import { notesStyles as styles } from './index.styles';

type NotesProps = {
    notes: Note[];
};

export const Notes: FC<NotesProps> = ({ notes }) => {
    const [showAll, setShowAll] = useState(false);

    const anchorRef = useAnchorLink('notes');

    const handleToggleShow = () => setShowAll((prev) => !prev);

    return (
        <Stack
            {...styles.container}
            data-test-id={DATA_TEST_ATTRIBUTES.BLOG_NOTES_BOX}
            ref={anchorRef}
        >
            <Flex {...styles.titleContainer}>
                <Text {...styles.title}>Заметки</Text>
                <Text
                    {...styles.notesCount}
                    data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_USER_NOTES_COUNT}
                >
                    ({notes.length})
                </Text>
            </Flex>

            <Flex {...styles.notes} data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_USER_NOTES_GRID}>
                {notes.map((note, index) => (
                    <Box
                        {...styles.note}
                        display={showAll || index < 3 ? 'grid' : 'none'}
                        key={index}
                    >
                        <NoteCard note={note} />
                    </Box>
                ))}
            </Flex>

            {notes.length > 3 && (
                <Button
                    {...styles.button}
                    data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_USER_NOTES_BUTTON}
                    onClick={handleToggleShow}
                >
                    {showAll ? 'Свернуть' : 'Показать больше'}
                </Button>
            )}
        </Stack>
    );
};
