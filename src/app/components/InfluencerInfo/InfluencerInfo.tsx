import { makeStyles, useTheme } from "@material-ui/core";
import { toBech32Address } from "@zilliqa-js/crypto";
import { BridgeableTokenMapping, RootState } from "app/store/types";
import { AppTheme } from "app/theme/types";
import { useNetwork } from "app/utils";
import cls from "classnames";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Blockchain } from "tradehub-api-js/build/main/lib/tradehub/utils";
import { Network } from "zilswap-sdk/lib/constants";

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    width: 80,
    height: 80,
    display: "flex",
    borderRadius: 3,
    padding: 2,
    border: "1px solid #e3e7ec",
    // boxShadow: "1px 1px 2px 0 rgb(0 0 0 / 20%), 1px 2px 1px 1px rgb(0 0 0 / 14%), 2px 3px 0px -1px rgb(0 0 0 / 12%)",
  },
  svg: {
    maxWidth: "100%",
    width: "unset",
    height: "unset",
    flex: 1,
    borderRadius: "100%",
  },
}));

const InfluencerInfo = (props: any) => {
  const { currency, address, className, blockchain }: {
    currency: string | false;
    address: string;
    className: string;
    blockchain?: Blockchain;
  } = props;
  const classes = useStyles();
  const bridgeTokens = useSelector<RootState, BridgeableTokenMapping>((state) => state.bridge.tokens);
  const theme = useTheme();
  const [error, setError] = useState<boolean>(false);
  const network = useNetwork();

  const urlSuffix = theme.palette.type === "dark" ? '?t=dark' : '';
  const tokenKey = currency === 'ZIL' ? '' : `.${address}`
  var tokenIconUrl: string

  const logoAddress = useMemo(() => {
    if (typeof blockchain !== "undefined" && blockchain === Blockchain.Ethereum) {
      const tokenHash = address.replace(/^0x/i, "");
      const bridgeToken = bridgeTokens.eth.find((bridgeToken) => bridgeToken.tokenAddress === tokenHash)
      
      if (bridgeToken) {
        return toBech32Address(bridgeToken.toTokenAddress);
      }
    }

    return address;
  }, [blockchain, address, bridgeTokens.eth])

  if (network === Network.TestNet) {
    // tokenIconUrl = `https://dr297zt0qngbx.cloudfront.net/tokens/testnet/${logoAddress}`
    tokenIconUrl = `http://celeb-images.nyc3.cdn.digitaloceanspaces.com/hashswap/influencer/${logoAddress}.jpg`
  } else {
    tokenIconUrl = `https://meta.viewblock.io/ZIL${tokenKey}/logo${urlSuffix}`
  }
  const fallbackImg = `https://meta.viewblock.io/ZIL.notfound/logo${urlSuffix}`;

  return (
    <div className={cls(classes.root, className)}>
      <img 
        className={classes.svg} 
        src={error ? fallbackImg : tokenIconUrl}
        // src= {tokenIconUrl}
        alt={`${currency} Token Logo ${error} ${tokenIconUrl}`}
        loading="lazy"
        onError={(() => setError(true))}
      />
    </div>
  )
};

export default InfluencerInfo;
