import React from "react";
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import { json } from "./NestedList.json"

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        background: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});

function getItems() {
    //original, hardcoded values. 
    //To be replaced with either a variable function or function call to a source of data
    var json = {
        list: [
            {
                id: 1,
                title: "North East Region",
                items: [
                    {
                        id: 1,
                        name: "Delaware Market",
                        subitems: [
                            {
                                id: 1,
                                name: "Area Management"
                            },
                            {
                                id: 2,
                                name: "Store Locations"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "New York Market",
                        subitems: [
                            {
                                id: 1,
                                name: "Area Management"
                            },
                            {
                                id: 2,
                                name: "Store Locations"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "South East Reion",
                items: [
                    {
                        id: 1,
                        name: "Georgia Market",
                        subitems: [
                            {
                                id: 1,
                                name: "Area Management"
                            },
                            {
                                id: 2,
                                name: "Store Locations"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "North Carolina Market",
                        subitems: [
                            {
                                id: 1,
                                name: "Area Management"
                            },
                            {
                                id: 2,
                                name: "Store Locations"
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                title: "Midwest Region",
                items: [
                    {
                        id: 1,
                        name: "Kansas Market",
                        subitems: [
                            {
                                id: 1,
                                name: "Area Management"
                            },
                            {
                                id: 2,
                                name: "Store Locations"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Minnesota Market",
                        subitems: [
                            {
                                id: 1,
                                name: "Area Management"
                            },
                            {
                                id: 2,
                                name: "Store Locations"
                            }
                        ]
                    }
                ]
            },
        // {
        //     id: 4,
        //     title: "North West Region",
        //     items: [
        //         {
        //             id: 1,
        //             name: "Oregon Market",
        //             subitems: [
        //                 {
        //                     id: 1,
        //                     name: "Area Management"
        //                 },
        //                 {
        //                     id: 2,
        //                     name: "Store Locations"
        //                 }
        //             ]
        //         },
        //         {
        //             id: 2,
        //             name: "Washington Market",
        //             subitems: [
        //                 {
        //                     id: 1,
        //                     name: "Area Management"
        //                 },
        //                 {
        //                     id: 2,
        //                     name: "Store Locations"
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     id: 5,
        //     title: "South West Region",
        //     items: [
        //         {
        //             id: 1,
        //             name: "California Market",
        //             subitems: [
        //                 {
        //                     id: 1,
        //                     name: "Area Management"
        //                 },
        //                 {
        //                     id: 2,
        //                     name: "Store Locations"
        //                 }
        //             ]
        //         },
        //         {
        //             id: 2,
        //             name: "New Mexico Market",
        //             subitems: [
        //                 {
        //                     id: 1,
        //                     name: "Area Management"
        //                 },
        //                 {
        //                     id: 2,
        //                     name: "Store Locations"
        //                 }
        //             ]
        //         }
        //     ]
        // },
        ]
    };
    return json;
}

class NestedList extends React.Component {

    

    state = {};
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
    
    render() {
        const items = getItems();
        const { classes } = this.props;
        return (
            <div>
                {items.list.map(list => {
                    return (
                        <List
                            className={classes.root}
                            key={list.id}
                            subheader={
                                <ListSubheader>{list.title}</ListSubheader>
                            }
                        >
                            {list.items.map(item => {
                                return (
                                    <div key={item.id}>
                                        {item.subitems != null ? (
                                            <div key={item.id}>
                                                <ListItem
                                                    button
                                                    key={item.id}
                                                    onClick={this.handleClick.bind(
                                                        this,
                                                        item.name
                                                    )}
                                                >
                                                    <ListItemText
                                                        primary={item.name}
                                                    />
                                                    {this.state[item.name] ? (
                                                        <ExpandLess />
                                                    ) : (
                                                        <ExpandMore />
                                                    )}
                                                </ListItem>
                                                <Collapse
                                                    key={list.items.id}
                                                    component="li"
                                                    in={this.state[item.name]}
                                                    timeout="auto"
                                                    unmountOnExit
                                                >
                                                    <List disablePadding>
                                                        {item.subitems.map(
                                                            sitem => {
                                                                return (
                                                                    <ListItem
                                                                        button
                                                                        key={
                                                                            sitem.id
                                                                        }
                                                                        className={
                                                                            classes.nested
                                                                        }
                                                                    >
                                                                        <ListItemText
                                                                            key={
                                                                                sitem.id
                                                                            }
                                                                            primary={
                                                                                sitem.name
                                                                            }
                                                                        />
                                                                    </ListItem>
                                                                );
                                                            }
                                                        )}
                                                    </List>
                                                </Collapse>{" "}
                                            </div>
                                        ) : (
                                            <ListItem
                                                button
                                                onClick={this.handleClick.bind(
                                                    this,
                                                    item.name
                                                )}
                                                key={item.id}
                                            >
                                                <ListItemText
                                                    primary={item.name}
                                                />
                                            </ListItem>
                                        )}
                                    </div>
                                );
                            })}
                            <Divider key={list.id} absolute />
                        </List>

                    );
                })}
            </div>
        );
    }
}
NestedList.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NestedList);
