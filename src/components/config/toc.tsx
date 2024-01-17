import { FC } from "react";

export const OnboardingToC: FC<{}> = ({ }) => (
  <span className="text-sm font-medium">
    By creating an account, You acknowledge you agree to our <br />
    <a href="https://staging-site.wrapcbdc.com/privacy" target="_blank" className="text-blue-500 hover:text-blue-300">
      Privacy Policy
    </a>{" "}
    |{" "}
    <a href="https://staging-site.wrapcbdc.com/withdrawal_aml_policy" target="_blank" className="text-blue-500 hover:text-blue-300">
      Withdrawal & AML Policy
    </a>{" "}
    |{" "}
    <a href="https://staging-site.wrapcbdc.com/terms" target="_blank" className="text-blue-500 hover:text-blue-300">
      Terms of Use
    </a>{" "}
  </span>
);
