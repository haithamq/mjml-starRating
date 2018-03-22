/**
 * Created by haithamqudaih on 3/22/18.
 */
import {MJMLElement} from 'mjml-core'
import React, {Component} from 'react'

// Tag Name. This is will be the component name that will be use in the mjml.
const tagName = 'mj-star'
// List of parent tags. Our component can be used inside the "mj-container".
const parentTag = ['mj-container']
// If false, the component can contain MJML; if true, it can contain only plain HTML
const endingTag = false
const defaultMJMLDefinition = {
    content: '',
    attributes: {
        countStars: 0

    },
}
// Here, we're using an ES6 decorator. It basically enables us to benefit from the mjml-core features useful here.
@MJMLElement
//This is how we define  our component and how/what it renders.
class star extends Component {

    render() {
        const {mjAttribute} = this.props

        var stars = [];
        var blankStars = 5 - mjAttribute('countStars');

        for (let i = 0; i < mjAttribute('countStars'); i++) {
            stars.push('<img src="./public/img/star-gold.svg">');
        }

        for (let i = 0; i < blankStars; i++) {
            stars.push('<img src="./public/img/star-gray.svg">');
        }

        const ulStyle = {"list-style-type": "none"};
        const liStyle = {"display": "inline-block"};

        return (
            <div>
                <ul style={ulStyle}>
                    { stars.map((item) => <li style={liStyle}>{item}</li>) }
                </ul>
            </div>
        )

    }

}

star.tagName = tagName
star.parentTag = parentTag
star.endingTag = endingTag
star.defaultMJMLDefinition = defaultMJMLDefinition

export default star
