import toast from 'react-hot-toast';
import { MaterialEditorForm } from 'components/MaterialEditorForm/MaterialEditorForm';
import * as API from 'services/api';
import { BackLink } from 'components/BackLink/BackLink';

export const CreateMaterialPage = () => {
  const addMaterial = async values => {
    try {
      await API.addMaterial(values);
      toast.success('Материал добавлен');
    } catch (error) {
      // setError(true);
      // setIsLoading(false);
      toast.error('Ошибка при добавлении материала');
      console.log(error);
    }
  };

  return (
    <>
      <BackLink href="/list" label="К списку материалов" />
      <MaterialEditorForm onSubmit={addMaterial} />
    </>
  );
};
