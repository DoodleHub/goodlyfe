import { Wrapper, Dot } from './SliderControls.styles'

interface SliderControls {
    selectedIndex: number
    updateIndex: React.Dispatch<React.SetStateAction<number>>
}

export const SliderControls = ({
    selectedIndex,
    updateIndex,
}: SliderControls) => {
    return (
        <Wrapper>
            {[...Array(5).keys()].map((index) => (
                <Dot
                    key={index}
                    $selected={index === selectedIndex}
                    onClick={() => updateIndex(index)}
                />
            ))}
        </Wrapper>
    )
}
