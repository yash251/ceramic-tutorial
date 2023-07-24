import { useViewerRecord } from "@self.id/react";
import { EthereumAuthProvider } from "@self.id/web";

function RecordSetter() {
    const record = useViewerRecord("basicProfile");

    const updateRecordName = async (name) => {
        await record.merge({
            name: name,
        });
    };
}