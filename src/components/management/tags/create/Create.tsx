import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Component from './Component';

import { Tag, TagsActionType } from '../../../../state/tags/types';
import { tags_create_request } from '../../../../state/tags/actions';

type DispatchPropsType = {
  tagsCreateRequest(tag: Tag): TagsActionType;
};

export type Props = DispatchPropsType;

const Create: React.FC<Props> = ({ tagsCreateRequest }) => {
  return <Component tagsCreateRequest={tagsCreateRequest} />;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    tagsCreateRequest: (tag: Tag) => dispatch(tags_create_request(tag))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Create);
