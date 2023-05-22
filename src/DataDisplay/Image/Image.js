import React from 'react';
import PropTypes from 'prop-types';

export default function ImageComp(props) {
    let imgRef = React.useRef(null);
    const [placeholderStyle, setPlaceholderStyle] = React.useState({});
    let defaultPlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXx8/XCy9K/yND09vfw8vTP1tzp7O/i5ure4+fO1dvJ0dfT2d/EzNPt7/Lb4OXo6+4FeM7UAAAFL0lEQVR4nO2c24KrIAxFLdha7///t0dxOlWDSiAKztnrbR4G6SoJBKHZA6zJYncgQeCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ot3Oi1KMq64FnWTVq+EueWzlRquqKVn/J+/ezEfdyHydKPYtc62yF1m1Xymq5ixPVdDnx8eslf1eCVu7hRFXFppAfLW39kNJyByeqOTJirGTvRsbKDZyozsHIpKUQsZK8E1Vu55GTrKTuRL0ZRoyVLviZaTtRVctUMuaVOnCoJO1E1WwjxsorbGZO2Qk7br5WuhApKTvpfZWMy5WAoZKuk6b1NhI4VJJ10uRBSsas0ng+OlUnVaARw9NvqCTqRERJpt9eUtJ0IqPEN36SdNIIKRnIPeafFJ0Ep9c5mr+qTdFJ2CRMpLAn5fScqJeokrFWZkoRdaImwtpw2T9iSnnxuiDoRFXda6hK28JzWTA14ryBxKFlTT9iTlT1W57o3Lta96yED8krRieknCw/DDuEP1TnKBlgzMlCTtZDXr+8pIjOwitK5x7JOKFD3mukiE85ix45S5FxYll46prdiv8ekpsU19wv4kS9LV1ouQPlrPzKliIzTuw9YDYiVfgFSxFx8rR+wcyMomSX9HYpTjlFwonqrB3gBc/JyYQjRcRJYe8Ay4l9rMlLcVi8iTjp7Y/nOBHcMjngWEoi4+TUlcmKw9rnxHzCWMqeU/ltkB9JEZl3SusnYmwQn1fm2GgPeiOzZrM9WZfu/3/BNDznYATLOLENffep+JppeMZBMSZUF9N6ljFM7KF3qpTduBZyQj4W53XTiRsEm1L2dr2k9k9W9Rtjq2BrJj9Zyk7pI7bP9lw8kfH+4KIFLGF77Sa3R90Un0POvHNCcYzsLVMk9+2buni1bd9xjMSJHMPmjCz7zov/fidW5GQ7OS/2e8BoRrLtrBfXScTIMVLsk09cJxEjZ8I6+cR1EmG1tsRaDsZ0EjlyDL0leuxOpulD4JTALtfXORRbnqVO1LDOePdtpoclWPsqulL+wt0P0SNnxFKrrp2opmuXl+5OuHA3PSmByDGQ9ezSydYdM+ELd4YUIsdANnoWTva2RSUv3JlnJRE5I2RbY+6kee1+dTrrhC7cPTZeMUdivZnydaIc3tdqqWuI6USOYZlSfp0oxzVlJxNByUSOYZlSPk6cDzqEXy17JDTn/LBMKRlTSRZ4X2giep2zZnEwZHLiGjifFt6BTtKKHMMspUxO2BkvDzoDm1jkGGa7bsaJx0t9XfgrOfuMlhezwsc48RrKufvhyiXXHatg8T2Zkm0eHzluxO8W4pXHKljkXycBt3h9blFdeqyCx2fPOguLbn6qTWsBu+Czxs/CopsdP4kmkx+mcZ8FRrfuWUqSTSYT005keDucW4iXnzRhMg17iYacC6A0VyZzzIQs0pBrUrn22JoXY4Us0pDjaZMzb+dIMX6/Qi0dHSU0XHySz48heqSaOs60vsvlq2mtpzj9OCh/Trgjew7afgLar63d6ec2SmTZm37+UyV7048K+Gmkm7O10A/8aaSbY7sEr8rYvYoNnX4Sr3EuYJVpVc35Ccu/innZbryMJ1n4v9f4N9FZ39XPZ931GYzMGH9VPHYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp8Q9+nG9anuOrfAAAAABJRU5ErkJggg==';
    let [loading, setLoading] = React.useState(props.loading);
    let loadingStyle={
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    let _rounded = props.rounded ? `rounded-${props.rounded}` : 'rounded-md';
    if(props.rounded==='2xl') _rounded = 'rounded-[1rem]';
    if(props.rounded==='3xl') _rounded = 'rounded-[1.2rem]';
    const sizes = {
        "xs": "!h-[25px] !w-[25px] !text-xs !leading-[0]",
        "sm": "!h-[30px] !w-[30px] !text-sm !leading-[0]",
        "md": "!h-[35px] !w-[35px] !text-md",
        "lg": "!h-[40px] !w-[40px] !text-lg",
        "xl": "!h-[45px] !w-[45px] !text-xl",
        "2xl": "!h-[50px] !w-[50px] !text-2xl",
        "3xl": "!h-[55px] !w-[55px] !text-3xl",
    }
    const styleTypes = {
        "primary":"bg-primary-600 text-white dark:bg-primary-500 dark:text-white",
        "primary-border":"border-primary-500 border text-primary-600 dark:border-primary-500 dark:text-white",
        "primary-plain":"bg-primary-100 text-primary-600 dark:bg-primary-500 dark:text-white",
        "secondary":"bg-secondary-600 text-white dark:bg-secondary-500 dark:text-white",
        "secondary-border":"border-secondary-500 border text-secondary-600 dark:border-secondary-500 dark:text-white",
        "secondary-plain":"bg-secondary-100 text-secondary-600 dark:bg-secondary-500 dark:text-white",
        "info":"bg-info-600 text-white dark:bg-info-500 dark:text-white",
        "info-border":"border-info-500 border text-info-600 dark:border-info-500 dark:text-white",
        "info-plain":"bg-info-100 text-info-600 dark:bg-info-500 dark:text-white",
        "success":"bg-success-600 text-white dark:bg-success-500 dark:text-white",
        "success-border":"border-success-500 border text-success-600 dark:border-success-500 dark:text-white",
        "success-plain":"bg-success-100 text-success-600 dark:bg-success-500 dark:text-white",
        "warning":"bg-warning-600 text-white dark:bg-warning-500 dark:text-white",
        "warning-border":"border-warning-500 border text-warning-600 dark:border-warning-500 dark:text-white",
        "warning-plain":"bg-warning-100 text-warning-600 dark:bg-warning-500 dark:text-white",
        "danger":"bg-danger-600 text-white dark:bg-danger-500 dark:text-white",
        "danger-border":"border-danger-500 border text-danger-600 dark:border-danger-500 dark:text-white",
        "danger-plain":"bg-danger-100 text-danger-600 dark:bg-danger-500 dark:text-white",
        "light":"bg-light-600 text-white dark:bg-light-500 dark:text-white",
        "light-border":"border-light-500 border text-light-600 dark:border-light-500 dark:text-white",
        "light-plain":"bg-light-100 text-light-600 dark:bg-light-500 dark:text-white",
        "dark":"bg-dark-600 text-white dark:bg-dark-500 dark:text-white",
        "dark-border":"border-dark-500 border text-dark-600 dark:border-dark-500 dark:text-white",
        "dark-plain":"bg-dark-100 text-dark-600 dark:bg-dark-500 dark:text-white",
        "none":"bg-transparent text-white dark:bg-transparent dark:text-white",
    }
    React.useEffect(() => {
        if (imgRef){
            let _img = imgRef.current;
            let newImg = new Image;
            newImg.onload = function() {
                _img.src = this.src;
                _img.style =  `
                object-fit: ${props.fit || 'fill'};
                object-position: ${props.position || 'center'};
                width: ${props.width || '100%'};
                height: ${props.height || '100%'};
                
            `;
                _img.className = props.className+" "+_rounded;
                setLoading(false);
            }
            newImg.src = props.src;
            newImg.className = props.className+" "+_rounded;
            setPlaceholderStyle({
                backgroundImage: `url(${props.placeholder === true ? defaultPlaceholder: props.placeholder})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: props.width || '100%',
                height: props.height || '100%',
            })

        }
    }, [props.src]);

    return (
        <>
            {props.placeholder && <div style={placeholderStyle } className={` ${_rounded}`}></div>}
            {loading === true &&
                <div style={loadingStyle} className={`${_rounded}`}>
                    <div  className={" animate-spin border-r-2 border-b-2  rounded-full h-8 w-8 border-gray-700 dark:border-white"}>

                    </div>
                </div>
            }
            {
                loading && typeof loading !== 'boolean' &&
                <div style={loadingStyle}>
                    {loading}
                </div>
            }
            {
                props.avatar &&
                <div className={` ${_rounded}  ${styleTypes[props.styleType]}`}>
                    <div className={`flex items-center justify-center h-full w-full  ${sizes[props.size]}`}>
                        {props.avatar}
                    </div>
                </div>
            }
            <img ref={imgRef} className={`${props.className} ${_rounded}`} alt={props.alt} loading={props.lazy ? "lazy":undefined} />
        </>
    );
}

ImageComp.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    lazy: PropTypes.bool,
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
    circle: PropTypes.bool,
    thumbnail: PropTypes.bool,
    fluid: PropTypes.bool,
    responsive: PropTypes.bool,
    width: PropTypes.any,
    height: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    fit: PropTypes.oneOf(['fill', 'contain', 'cover', 'none', 'scale-down']),
    placeholder: PropTypes.string,
    loading: PropTypes.bool,
    avatar: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
    styleType: PropTypes.oneOf(['primary', 'primary-border', 'primary-plain', 'secondary', 'secondary-border', 'secondary-plain', 'info', 'info-border', 'info-plain', 'success', 'success-border', 'success-plain', 'warning', 'warning-border', 'warning-plain', 'danger', 'danger-border', 'danger-plain', 'light', 'light-border', 'light-plain', 'dark', 'dark-border', 'dark-plain', 'none']),
};

ImageComp.defaultProps = {

};
