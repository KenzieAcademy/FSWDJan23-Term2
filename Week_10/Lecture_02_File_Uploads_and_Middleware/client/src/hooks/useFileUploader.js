import api from "../utils/api.utils";

const useFileUploader = () => {
  const uploadFile = async (url, file, name) => {
    const formData = new FormData();
    formData.append(name, file);

    return await api.post(url, formData);
  };

  return {
    uploadFile,
  };
};

export default useFileUploader;
