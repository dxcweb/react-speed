/**
 * Created by dxc on 2016/9/7.
 */
import React from 'react'
import Block from 'react-speed/Block/Block'
import {Link} from 'react-router'

export default class Index extends React.Component {
    render() {
        return (
            <Block>
                <Block el="pre" fs={16}>
                    {" static propTypes = {\n        el: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),//元素\n        s: PropTypes.object,//style 样式\n        w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//width 宽\n        h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//height 高\n        bc: PropTypes.string,//background\n        p: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//padding\n        pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//paddingLeft\n        pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//paddingRight\n        pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//paddingTop\n        pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//paddingBottom\n        m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//margin\n        ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//marginLeft\n        mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//marginRight\n        mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//marginTop\n        mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//marginBottom\n        fc: PropTypes.string,//color 字体颜色\n        fs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//fontSize 字体大小\n        fw: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//fontWeight 字体粗细\n        vf: PropTypes.bool,//垂直\n        hf: PropTypes.bool,//水平\n        j: React.PropTypes.oneOf(['s', 'c', 'e', 'a', 'b']),//垂直居中\n        a: React.PropTypes.oneOf(['s', 'c', 'e'])//水平居中\n    };"}
                </Block>
                <p>{"<Block w={50} h={50} bc='#cac4c4' >1</Block>"}</p>
                <Block fw={700}>{"1. w={50} h={50} bc='#cac4c4'"}</Block>
                <Block w={50} h={50} bc='#cac4c4'>
                    1
                </Block>
                <p>{"<Block  w={50} h={50} bc='#cac4c4' fc='#fff' fs={20} fw='700'>2</Block>"}</p>
                <Block fw={700}>{"2. fc='#fff' fs='20px' fw='700'"}</Block>
                <Block w={50} h={50} bc='#cac4c4' fc='#fff' fs='20px' fw='700'>
                    2
                </Block>

                <p>{"<Block w={30} h={30} p={10} bc='#cac4c4'><Block bc='#12d887' w='100%' h='100%'>3</Block></Block>"}</p>
                <Block fw={700}>{"3. p={10}"}</Block>
                <Block w={30} h={30} p={10} bc='#cac4c4'><Block bc='#12d887' w='100%' h='100%'>3</Block></Block>

                <p>{"<Block w={30} h={30} pl={10} pr={10} pt={10} pb={10} bc='#cac4c4'><Block bc='#12d887' w='100%' h='100%'>4</Block></Block>"}</p>
                <Block fw={700}>{"4. pl={10} pr={10} pt={10} pb={10}"}</Block>
                <Block w={30} h={30} pl={10} pr={10} pt={10} pb={10} bc='#cac4c4'><Block bc='#12d887' w='100%' h='100%'>4</Block></Block>

                <p>{"<Block s={{border:'1px solid'}}><Block w={30} h={30}  m={10} bc='#12d887' >5</Block></Block>"}</p>
                <Block fw={700}>{"5. m={10}"}</Block>
                <Block s={{border:'1px solid'}}><Block w={30} h={30}  m={10} bc='#12d887' >5</Block></Block>

                <p>{"<Block s={{border:'1px solid'}}><Block w={30} h={30}  ml={10} mr={10} mt={10} mb={10} bc='#12d887' >5</Block></Block>"}</p>
                <Block fw={700}>{"6. ml={10} mr={10} mt={10} mb={10}"}</Block>
                <Block s={{border:'1px solid'}}><Block w={30} h={30}  ml={10} mr={10} mt={10} mb={10} bc='#12d887' >5</Block></Block>

                <Block fw={700}>{"7. hf w={100} f='1' f='3'"}</Block>
                <Block h={50} bc='#cac4c4' hf>
                    <Block w={100}  bc='#12d887' >4</Block>
                    <Block f="1" bc='#12d887' >4</Block>
                    <Block f='3'  w={100}  bc='#12d887' >4</Block>
                </Block>

                <Block fw={700}>{"8. vf h={30} f='1' f='3'"}</Block>
                <Block w={100} h={200} bc='#cac4c4' vf>
                    <Block h={30}  bc='#12d887' >4</Block>
                    <Block  f="1" bc='#12d887' >4</Block>
                    <Block f='3'  bc='#12d887' >4</Block>
                </Block>
                <Block fw={700}>{"9. a='c'"}</Block>
                <Block h={100}  w={200} bc='#cac4c4' a="c" >
                    <Block h={30} w={30} bc='#12d887' >1</Block>
                    <Block h={30} w={30} bc='#12d887' >2</Block>
                </Block>

                <Block fw={700}>{"10. vf a='c'"}</Block>
                <Block h={100}  w={200} bc='#cac4c4' vf a="c" >
                    <Block h={30} w={30} bc='#12d887' >1</Block>
                    <Block h={30} w={30} bc='#12d887' >2</Block>
                </Block>
                <Block fw={700}>{"11.  j='c'"}</Block>
                <Block h={100}  w={200} bc='#cac4c4'j="c" >
                    <Block h={30} w={30} bc='#12d887' >1</Block>
                    <Block h={30} w={30} bc='#12d887' >2</Block>
                </Block>
                <Block fw={700}>{"12. vf j='c'"}</Block>
                <Block h={100}  w={200} bc='#cac4c4' vf j="c" >
                    <Block h={30} w={30} bc='#12d887' >1</Block>
                    <Block h={30} w={30} bc='#12d887' >2</Block>
                </Block>
                <Block fw={700}>{"13. a='c' j='c'"}</Block>
                <Block h={100}  w={200} bc='#cac4c4' a='c' j='c' >
                    <Block h={30} w={30} bc='#12d887' >1</Block>
                    <Block h={30} w={30} bc='#12d887' >2</Block>
                </Block>
                <Block fw={700}>{"14. j='a'"}</Block>
                <Block    bc='#cac4c4'j="a">
                    <Block h={30} w={30} bc='#12d887' >4</Block>
                    <Block h={30} w={30} bc='#12d887' >4</Block>
                    <Block h={30} w={30} bc='#12d887' >4</Block>
                </Block>
                <Block fw={700}>{"15. j='b'"}</Block>
                <Block    bc='#cac4c4'j="b">
                    <Block h={30} w={30} bc='#12d887' >4</Block>
                    <Block h={30} w={30} bc='#12d887' >4</Block>
                    <Block h={30} w={30} bc='#12d887' >4</Block>
                </Block>
                <Block fw={700}>{"16. vf j='b'"}</Block>
                <Block h={200}  w={100}  bc='#cac4c4'j="b" vf >
                    <Block h={30} bc='#12d887' >4</Block>
                    <Block h={30}  bc='#12d887' >4</Block>
                    <Block h={30}  bc='#12d887' >4</Block>
                </Block>
            </Block>
        );
    }
}