import React from "react";

interface SecurityBoxProps {
  title: string;
  result: string;
  footer: string;
}

export const SecurityBox: React.FC<SecurityBoxProps> = ({
  title,
  result,
  footer,
}) => {
  return (
    <div className="box-border-maker-s">
      <div className="box-container-s">
        <div className="box-title-s">{title}</div>
        <div className="box-result">{result}</div>
        <div className="box-footer">
          {footer.split("://").length == 1 ? (
            footer
          ) : (
            <a href={footer} className="box-link">
              {footer}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
