// import Select from "react-select";
import { DragHandleIcon } from "@chakra-ui/icons";
import { Box, Center, IconButton, Heading, HStack } from "@chakra-ui/react";
import {
  EditIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import namer from "color-namer";

function CardHeader({
  shape,
  color,
  displayLayer,
  setdisplayLayer,
  closeButton,
  isEditorOpen,
  onEditorToggle,
  ...props
}) {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function colorName(color, pick = "basic") {
    return capitalize(namer(color, { pick: [pick] })[pick][0].name);
  }

  function layerName(color, shape) {
    return `${colorName(color, "pantone")} ${capitalize(shape ? shape : "")}`;
  }

  return (
    <HStack {...props}>
      <Center
        className="dragHandle"
        py="0.7rem"
        // increases the click box
        pr={["0.4rem", "0.5rem"]}
        // gives more room
        mr={["0.1rem", "0.4rem"]}
      >
        <DragHandleIcon />
      </Center>
      <Box w="100%">
        <HStack float="right">
          <IconButton
            onClick={() => setdisplayLayer(!displayLayer)}
            icon={displayLayer ? <ViewIcon /> : <ViewOffIcon />}
          />
          <IconButton
            onClick={onEditorToggle}
            icon={isEditorOpen ? <LockIcon /> : <EditIcon />}
          />
          <IconButton onClick={() => closeButton()} icon={<CloseIcon />} />
        </HStack>

        <Heading
          as="h4"
          my="0.5rem"
          p="0.2rem"
          size="md"
          fontSize={["lg", "xl"]}
        >
          {layerName(color, shape)}
        </Heading>
      </Box>
    </HStack>
  );
}

export default CardHeader;
