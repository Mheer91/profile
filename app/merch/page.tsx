import styles from "../page.module.css";
import Image from "next/image";
import lcv_lg from "../../assets/svg/lcv-lg.svg";
import {classes} from "../../util/std";

export default function Merch() {

    return (
        <main className={classes([styles.main, 'default'])}>
            <div>
                Merch
            </div>
            <div className={styles.description}>
                {/*<p>*/}
                {/*  Copyright Cortogonia Web LLC. 2023*/}
                {/*</p>*/}
                <Image src={lcv_lg} alt={'LCV Large Logo'} />
            </div>
        </main>
    )
}