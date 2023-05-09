import React from 'react';
import PropTypes from 'prop-types';
import ButtonFile from './views/ButtonFile'
/**
 * File Componenti
 *
 */
export default function File({button,onChangeFile}){
    const [fileList, setFileList] = React.useState([]);

    const onChangeInput = (e) => {
        onChangeFile(e.target.files);
        setFileList(e.target.files);
    }

    const removeFile = (index) => {
        let files = Object.values(fileList);
        files.splice(index,1);
        setFileList(files);
        onChangeFile(files);
    }

    return(
        <div className={"dark:text-white"}>
            <input type="file" className={"hidden"} id={"dodo-style-file-input"} onChange={onChangeInput} multiple />
            <ButtonFile  fileList={fileList} removeFile={removeFile} button={button} />
        </div>
    )
}

File.propTypes = {
    button: PropTypes.shape({
        type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
    }),
    onChangeFile: PropTypes.func.isRequired,
};

File.defaultProps = {
};
