import NextLink from "next/link";
import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import { Flex, Tooltip, Link, Icon } from "@chakra-ui/react";

export default function Contact() {
  const links = [
    {
      tooltip: "+1 510.890.6429 (Call or Text!)",
      title: "Call me!",
      href: "tel:5108906429",
      icon: RiPhoneFill,
    },
    {
      tooltip: "topher@stupendousweb.com",
      title: "Email me!",
      href: "mailto:topher@stupendousweb.com",
      icon: RiMailFill,
    },
  ];

  return (
    <Flex direction={"column"} position={"fixed"} right={0} bottom={0} p={16}>
      {links.map((link) => (
        <Tooltip key={link.href} label={link.tooltip} placement={"left"}>
          <Link as={NextLink} href={link.href} title={link.title}>
            <Icon as={link.icon} boxSize={8} />
          </Link>
        </Tooltip>
      ))}
    </Flex>
  );
}
