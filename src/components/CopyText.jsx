import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { LuCopy } from "react-icons/lu";
import { LuClipboard } from "react-icons/lu";
import { LuCheckCircle2 } from "react-icons/lu";

const CopyText = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CopyToClipboard text={text} onCopy={onCopy}>
      {copied ? (
        <LuCheckCircle2 className="text-green-700" />
      ) : (
        <LuClipboard className="cursor-pointer" />
      )}
    </CopyToClipboard>
  );
};

export default CopyText;
