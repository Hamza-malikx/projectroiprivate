import { BellIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

interface SectionHeaderProps {
  title: string;
  collapseDisabled?: boolean;
  first?: boolean;
  toggle?: () => void;
  open?: boolean;
  children?: JSX.Element;
  qmark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  collapseDisabled,
  first = false,
  toggle,
  open,
  children,
  qmark = false,
}) => {
  const getArrow = () => {
    return open ? (
      <ChevronUpIcon w={6} h={6} />
    ) : (
      <ChevronDownIcon w={6} h={6} />
    );
  };

  return (
    <div className="section-header">
      <span className="section-header-title">
        {title}
        {qmark ? <img src="./qmark.png" alt="help" className="sh-qmark" /> : ""}
      </span>
      {collapseDisabled ? (
        ""
      ) : (
        <div className="section-header-collapse">
          {children}
          <BellIcon h={29} w={29} marginRight="20px"></BellIcon>
          <Button
            borderColor={"transparent"}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            variant="outline"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            onClick={toggle}
          >
            {first ? getArrow() : ""}
            {getArrow()}
          </Button>
        </div>
      )}
    </div>
  );
};
