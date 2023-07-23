import { useViewerRecord } from "@self.id/react";

function RecordSetter() {
    const record = useViewerRecord("basicProfile");

    const updateRecordName = async (name) => {
        await record.merge({
            name: name,
        });
    };
}