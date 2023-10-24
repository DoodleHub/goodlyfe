import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    bottom: 29px;
    display: flex;
    gap: 8px;
`

const Dot = styled.div<{ $selected?: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ $selected }) => ($selected ? '#E43071' : 'white')};
`

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
