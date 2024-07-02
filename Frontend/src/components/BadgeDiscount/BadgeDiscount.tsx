import {
    Badge,
    rem,
    Text,
  } from "@mantine/core";
import { IconPercentage } from "@tabler/icons-react";

function BadgeDiscount() {
  return (
    <Badge radius="sm"  variant="filled" size="sm" color="red">
      <Text inline><IconPercentage size={16}/></Text>
    </Badge>
  );
}
export default BadgeDiscount;
