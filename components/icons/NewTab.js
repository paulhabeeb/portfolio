import PropTypes from 'prop-types'

export default function NewTab({ styles }) {
    return (
        <svg className={styles} viewBox='0 0 700 550'>
            <path d='M105 559.96c-19.301 0-35-15.68-35-35v-490c0-19.32 15.699-35 35-35h227.5c9.676 0 17.5 7.824 17.5 17.5v35c0 9.676-7.824 17.5-17.5 17.5H140v420h420v-192.5c0-9.676 7.824-17.5 17.5-17.5h35c9.676 0 17.5 7.824 17.5 17.5v227.5c0 19.32-15.699 35-35 35z' />
            <path d='M612.5 0h-175c-7.07 0-13.477 4.234-16.172 10.797-2.71 6.527-1.207 14.051 3.797 19.074l62.754 62.754-175 175c-6.844 6.844-6.844 17.902 0 24.746l24.746 24.746c6.879 6.844 17.938 6.844 24.78 0l174.98-175 62.739 62.754a17.493 17.493 0 0 0 12.37 5.129c2.259 0 4.532-.438 6.704-1.363 6.543-2.68 10.797-9.102 10.797-16.137v-175c0-9.711-7.824-17.5-17.5-17.5z' />
        </svg>
    )
}

NewTab.propTypes = {
    styles: PropTypes.string,
}
