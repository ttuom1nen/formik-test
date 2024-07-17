import { useFormikContext } from "formik";
import FormField from "../../components/common/FormField";

const AdditionalInfo = () => {
  const { values } = useFormikContext();

  return (
    <>
      {(values as any).showAdditionalInfo && (
        <FormField type="text" name="additionalInfoText" id="additionalInfoText" />
      )}
    </>
  );
};

export default AdditionalInfo;
